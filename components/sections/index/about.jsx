// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="With a diverse skill set that includes Front-end, Back-end development."
				/>
				<section className={about.content}>
					<div className={about.image}>
						{/* <img src="/img/back.jpg" alt="Nelson family photo"/> */}
						{/* <video src="/img/video.mp4" autoPlay={true} loop={true} style={{borderRadius:'10px',}}></video> */}
						<Image src="/img/back.jpg" layout='fill' alt='img'/>
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Softskills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="In addition to my technical expertise—I also have understanding about user-experience, time management, and multitasking skills—honed through my experience. Outside of work, I enjoy staying active through sports such as running and cricket. I am confident in my ability to bring passion and value to any project."
						/>
						<BadgesBlock 
							title="Reasearch and planning" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="One of my favorite aspects of creating is planning the architecture of a project. I enjoy working with the many touch points of user experience."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'UI Design', 	        type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	// { key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	// { key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]