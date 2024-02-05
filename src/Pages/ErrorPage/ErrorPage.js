import PagesTitleComponent from "../../Componenets/PagesTitleComponent"

import './ErrorPage.css'

function ErrorPage()
{
    return (
            <div className="errorTitle text-center">
                <PagesTitleComponent title="Not Found"></PagesTitleComponent>
                <h2>This Page doesnt exist</h2>
            </div>
    )

}
export default ErrorPage