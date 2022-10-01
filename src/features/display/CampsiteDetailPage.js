import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../campsites/campsitesSlice";
import { CampsiteDetail } from "../campsites/CampsiteDetail"

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
}

export default CampsiteDetailPage;