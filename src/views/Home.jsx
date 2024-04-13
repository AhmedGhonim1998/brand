import { useTranslation } from "react-i18next"
import ElectronicItems from "../HomeComponents/ElectronicItems";
import Offers from "../HomeComponents/Offers";
import Indoor from "../HomeComponents/Indoor";
import Suppliers from "../HomeComponents/Suppliers";
import RecommendedItems from "../HomeComponents/RecommendedItems";
import ExtraServices from "../HomeComponents/EtraServices";
import Flags from "../HomeComponents/Flags";
export default function Home() {

    let { t } = useTranslation();

    return (
        <section className="homeBrand">
            <ElectronicItems/>
            <Offers/>
            <Indoor/>
            <Suppliers/>
            <RecommendedItems/>
            <ExtraServices/>
            <Flags/>
        </section>
    )
}