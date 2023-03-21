import AdminLayout from '@/components/Layouts/AdminLayout'
import Head from 'next/head'
import Link from 'next/link'

const Dashboard = () => {
    return (
        <AdminLayout
            header={
                <h2 className="font-semibold text-xl leading-tight">
                    Dashboard
                </h2>
            }>
            <Head>
                <title>CMS Frontend next.js - Dashboard</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm block-bg">
                        <div className="p-6">
                            Go to Website,
                            <Link href="/" className="border ml-2">
                                click here !
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Dashboard
