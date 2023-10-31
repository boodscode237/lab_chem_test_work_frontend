import {renderInput} from "../../../utils/utils";

export default function FormNova () {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="w-full">
                    {renderInput("id", "id", "Type material id")}
                </div>
                <div className="w-full">
                    {renderInput("nanoparticle_id", "Nano-particle Id", "Nano-particle Id")}
                </div>
                <div className="w-full">
                    {renderInput("density", "Density", "Density", "text")}
                </div>
                <div className="w-full">
                    {renderInput("method", "Method", "Method", "textarea")}
                </div>
                <div className="sm:col-span-2">
                    {renderInput("absorbat", "Absorbat", "absorbat", "text")}
                </div>
                <div className="sm:col-span-2">
                    {renderInput("poresize", "User Id", "User ID", "number")}
                </div>
                <div className="w-full">
                    {renderInput("absorption_desorption_curve", "Absorption-Desorption Curve", "absorbat", "file")}
                </div>
                <div className="w-full">
                    {renderInput("pore_distribution_curve", "Pore Distribution Curve", "User ID", "file")}
                </div>

            </div>

        </section>
    )
}