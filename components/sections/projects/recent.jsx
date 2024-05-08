// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

import Image from 'next/image'

import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/projects/recent.module.scss'

export default function GitProjects({ repos, user }) {
	const staticData =[
        {
            "name": "NP",
            "description": "Portfolio shows details about me",
            "topics": ["Portfolio", "React-js"],
            "forks_count": "2",
            "html_url": "https://github.com/VanshWebDev/NP",
            "language": "JavaScript",
            "watchers": "2",
            "homepage": "https://vanshkumar.netlify.app",
            "pushed_at": "May 03 2024"
        },
        {
            "name": "wanderlust",
            "description": "An market place to sell property",
            "topics": ["React-js", "MERN Stack"],
            "forks_count": "2",
            "html_url": "https://github.com/VanshWebDev/wanderlust",
            "language": "JavaScript",
            "watchers": "3",
            "homepage": "https://delta-project-4okj.onrender.com",
            "pushed_at": "Feb 25 2024"
        },
        {
            "name": "BookStore",
            "description": "Market place to sell books",
            "topics": ["React-js", "MERN Stack"],
            "forks_count": "2",
            "html_url": "https://github.com/VanshWebDev/bookStore",
            "language": "JavaScript",
            "watchers": "2",
            "homepage": "https://vanshkumar.netlify.app",
            "pushed_at": "Apr 28 2024"
        },
        {
            "name": "mychatapp",
            "description": "A chat application",
            "topics": ["React-js", "MERN Stack"],
            "forks_count": "2",
            "html_url": "https://github.com/VanshWebDev/mychatapp",
            "language": "JavaScript",
            "watchers": "5",
            "homepage": "",
            "pushed_at": "Mar 12 2024"
        }
    ];
	let apiMessage = "API rate limit exceeded for 103.16.29.144. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)"
	let data;
if(repos?.message ==apiMessage || repos==0 || !repos){
	data = staticData;
}else{
	data = repos;
}

	user= [
		{
			"avatar_url":"https://avatars.githubusercontent.com/u/143046887?s=400&u=906b3523887f4ed327633cece03ebbca2ae122ea&v=4",
			"name":"VanshWebDev",
			"html_url":"https://github.com/VanshWebDev"
		}
	]
	return (
		<Section classProp={css.section}>	
			<Container classProp={css.container} spacing={'verticalXXXLrg'}>
				<h3>Recent Projects</h3>
				<section className={css.profile}>
					<Image className={css.profilePhoto} src={`${user[0].avatar_url}`} alt="Github Profile Photo" height={60} width={60}/>
					<span className={css.details}>
						<p>{user[0].name}</p>
						<a href={user[0].html_url} rel="noreferrer" target="_blank">{user[0].html_url} <Icon icon={[ 'far', 'arrow-up-right-from-square' ]} /></a>
					</span>
				</section>
				<div className={css.projects}>
					{
					data.map( ({ name, description, topics, forks_count, html_url, language, watchers, homepage, pushed_at }, index) => {
						const date = new Date(pushed_at).toDateString()
						return (
							<>
							<article key={index} className={css.project}>
								<span className={css.header}>
									<a href={html_url} rel="noreferrer" target="_blank">{name} <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /></a>
									<p className={css.homepage}>{homepage}</p>
								</span>
								<span className={css.descriptionContainer}>
									<p className={css.description}>{description}</p>
								</span>
								<span className={css.details}>
									<p><i className={`devicon-${language?.toLowerCase()}-plain colored`} /> {language}</p>
									<p><Icon icon={[ 'fad', 'star' ]} /> {watchers}</p>
									<p><Icon icon={[ 'fad', 'code-branch' ]} /> {forks_count}</p>
									<p className={css.pushedAt}>{date}</p>
								</span>
								<span className={css.topicsContainer}>
									{
									topics.map( (e, index) => {
										return ( <span key={index} className={css.topics}><i class="devicon-github-plain"></i> {e}</span> )
									})
									}
								</span>
							</article>
							</>
						)
					})
					}
				</div>
				{/*
				<pre>{ JSON.stringify(user, undefined, 2) }</pre>
				<pre>{ JSON.stringify(data, undefined, 2) }</pre>
				*/}
			</Container>
		</Section>
	)
}