import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import ApplicationLogo from '@/components/ApplicationLogo'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>cms-frontend-nextjs</title>
            </Head>

            <div className="relative items-top flex flex-col justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
                <Link href="/">
                    <ApplicationLogo />
                </Link>
                <div className="px-6 py-4 sm:block">
                    {user ? (
                        <Link
                            href="/admin/dashboard"
                            className="ml-4 text-sm text-gray-700 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/user/login"
                                className="text-sm text-gray-700 underline">
                                Login
                            </Link>

                            <Link
                                href="/user/register"
                                className="ml-4 text-sm text-gray-700 underline">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
