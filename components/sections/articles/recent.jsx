import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

import Image from 'next/image'
import SectionTitle from '../../blocks/section.title.block'

import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/articles/recent.module.scss'
import { PageNotFoundError } from 'next/dist/shared/lib/utils';

export default function Recent({ mediumArticles }) {

	const feed 		= mediumArticles.feed
	const articles 	= mediumArticles.items

	return (
		<h2 style={{display:'flex',justifyContent:'center', alignItems:'center',height:'100vh', fontSize:'1.5rem'}}>page not found 404</h2>
	)
}