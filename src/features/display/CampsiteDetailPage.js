import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../campsites/campsitesSlice";
import { CampsiteDetail } from "../campsites/CampsiteDetail";
import CommentsList from "../comments/CommentsList";

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    return (
        <Container>
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;