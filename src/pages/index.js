import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import ApplicationLogo from '@/components/ApplicationLogo'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>CMS Frontend next.js</title>
            </Head>

            <div className="relative items-top flex flex-col justify-center min-h-screen sm:items-center sm:pt-0">
                <Link href="/">
                    <ApplicationLogo />
                </Link>
                <div className="px-6 py-4 sm:block">
                    {user ? (
                        <Link
                            href="/admin/dashboard"
                            className="ml-4 text-sm border">
                            Admin
                        </Link>
                    ) : (
                        <>
                            <Link href="/user/login" className="text-sm border">
                                Login
                            </Link>

                            <Link
                                href="/user/register"
                                className="ml-4 text-sm border">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
