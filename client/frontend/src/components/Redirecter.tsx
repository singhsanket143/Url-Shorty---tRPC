import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import trpcClient from "../trpc";

export function Redirecter() {
    const { shortcode } = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        async function fetchOriginal() {
            try {
                const response = await trpcClient.getShortUrl.query(`${shortcode}`);
                if (response) {
                    window.location.href = response
                }
            } catch (error) {
                navigate("/404")
            }
        }
        fetchOriginal();
    }, [shortcode, navigate])

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
                <p className="text-blue-500 text-xl">Loading...</p>
            </div>
        </div>
    )

}


