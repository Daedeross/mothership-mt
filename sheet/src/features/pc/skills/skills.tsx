import { ReactElement } from 'react';
import { Container, Row } from 'react-bootstrap';

import { useAppSelector } from '../../../app/hooks';
import { SkillType, selectSkillsOfType } from './skills-slice';
import SkillDisplay from './skill-display';


function Skills(): ReactElement {
    const trained = useAppSelector(selectSkillsOfType(SkillType.Trained));
    const expert = useAppSelector(selectSkillsOfType(SkillType.Expert));
    const master = useAppSelector(selectSkillsOfType(SkillType.Master));

    const mapSkill = (bonus: number) => (name: string) => {
        return <SkillDisplay key={name} name={name} bonus={bonus} />
    }

    const skills = trained.map(mapSkill(10))
        .concat(expert.map(mapSkill(15)))
        .concat(master.map(mapSkill(20)));

    return (
        <Container style={{paddingBottom:0}}>
            <Row><h3>SKILLS</h3></Row>
            <Row>
                <div className='d-flex flex-row justify-content-around'>
                    {skills}
                </div>
            </Row>
        </Container>
    );
}

export default Skills;