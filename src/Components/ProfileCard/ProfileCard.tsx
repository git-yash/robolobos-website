import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ProfileCard.css'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function ProfileCard(props: any) {

    const control = useAnimation()
    const [ref, inView] = useInView()
    const cardVariant = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
    }
    useEffect(() => {
        if (inView) {
            control.start("visible");
        }else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            ref={ref}
            variants={cardVariant}
            initial="hidden"
            animate={control}
            className="ProfileCard"
        >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title style={{fontWeight: "bold"}}>{props.name}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Button className="websiteButton">Go somewhere</Button>
                </Card.Body>
            </Card>
        </motion.div>
    );
}

export default ProfileCard;
