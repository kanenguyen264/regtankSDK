import ThemeColors from '../constants/ThemeColors';
import { themeSettings } from "./settings";
import { toRem } from "../utils";

const select = {
    styleOverrides:{
    root: {

    },
      select: {
        padding: [toRem(10), toRem(10)],
        marginBottom: toRem(3),
        paddingLeft: toRem(8),
      },
      iconOutlined: {
          top: "25%",
          transform: "translateY(-30%)",
      }
    }
}

export default select;