import AdminLayout from '@/components/Layouts/AdminLayout'
import Head from 'next/head'

const Dashboard = () => {
    return (
        <AdminLayout
            header={
                <h2 className="font-semibold text-xl leading-tight">
                    Dashboard
                </h2>
            }>
            <Head>
                <title>Backend - Dashboard</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm block-bg">
                        <div className="p-6">You're logged in!</div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Dashboard
