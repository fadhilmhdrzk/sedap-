import FrameworkList from "./FrameworkList";
import { createRoot } from "react-dom/client";
import "./tailwind.css";
import FrameworkSeach from "./FrameworkSearch";
import ResponsiveDesign from "./ResponsiveDesign";


createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <FrameworkList/> */}
            <FrameworkSeach/>
            <ResponsiveDesign/>
        </div>
    )

    