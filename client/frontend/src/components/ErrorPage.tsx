import { Link } from "react-router-dom"

export function ErrorPage() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-9xl font-bold text-blue-500">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
                <p className="text-gray-500 mt-2">
                    Sorry, the page you're looking for doesn't exist.
                </p>
                <Link
                    to="/"
                    className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Go Home
                </Link>
            </div>
        </>
    )
}

