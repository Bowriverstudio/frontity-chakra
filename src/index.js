import { connect } from "frontity";

import alert from "./processors/alert";
import alertIcon from "./processors/alertIcon";
import spacer from "./processors/spacer";

const Charka = {
  libraries: {
    html2react: {
      processors: [alert, alertIcon, spacer],
    },
  },
};

export default connect(Charka);
