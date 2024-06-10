import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import bcrypt from "bcrypt";

export const options = {
    providers: [
        Github({
            profile(profile) {
                console.log("Github Profile: ", profile)

                let userRole = "Github User"
                if (profile?.email == 'boopathyganesh95@gmail.com') {
                    userRole = "Admin"
                }

                return {
                    ...profile,
                    role: userRole,
                };
            },
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        Google({
            profile(profile) {
                console.log("Google Profile: ", profile)

                let userRole = "Google User"

                return {
                    ...profile,
                    id: profile.sub,
                    role: userRole,
                };
            },
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "your email" },
                password: { label: "Password", type: "password", placeholder: "your password" },
            },
            async authorize(credentials) {
                try {
                    const foundUser = await User.findOne({ email: credentials.email })
                        .lean()
                        .exec();

                    if (foundUser) {
                        console.log("User Exists")
                        const match = await bcrypt.compare(
                            credentials.password, foundUser.password
                        )

                        if (match) {
                            console.log("Good Pass")
                            delete foundUser.password
                            foundUser["role"] = "Unverified Email"
                            return foundUser;
                        }
                    }
                } catch (error) {
                    console.error(error)
                }
                return null;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.role = user.role;
            return token;
        },
        async session({ session, token }) {
            if (session?.user) session.user.role = token.role;
            return session;
        }
    },
    // pages: {
    //     signIn: '/login',
    // }
}

