import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'

const AdminLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    return (
        <div className="min-h-screen admin">
            <Navigation user={user} />

            {/* Page Heading */}
            <header className="shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header>

            {/* Page Content */}
            <main>{children}</main>
        </div>
    )
}

export default AdminLayout
