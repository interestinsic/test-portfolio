import { useTranslation } from "react-i18next";


function About(){
    const [t, i18n] = useTranslation("global")

    return(
    <div>
       <p className="font-lato">{t("header.hello-world")}</p>
    </div>
        
        )
}
export default About;