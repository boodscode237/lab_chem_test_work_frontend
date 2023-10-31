import {NavLink, Outlet} from "react-router-dom";
import Table from "./Tables/Table";

export default function DashboardLayout() {
    return(
        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">Data Table</h1>
                    </p>
                </div>
                <div>
                    <Table />
                </div>

            </div>

        </div>
    )
}