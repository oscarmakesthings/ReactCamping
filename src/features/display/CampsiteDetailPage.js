import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../campsites/campsitesSlice";
import { CampsiteDetail } from "../campsites/CampsiteDetail";
import CommentsList from "../comments/CommentsList";
import SubHeader from '../components/SubHeader';

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    return (
        <Container>
            <SubHeader current={campsiteId.name} detail={true} />
            <Row>
                <CampsiteDetail campsite={campsiteId} />
                <CommentsList campsiteId={campsiteId} />
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;