import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProfileCard.css'

function ProfileCard(props: any) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Button className="websiteButton">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default ProfileCard;
