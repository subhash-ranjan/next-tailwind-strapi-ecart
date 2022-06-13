export type ButtonType = {
	text: string
	style: string
	styleText?: string
	showArrow?: boolean
	isCapital?: boolean
	isIcon?: boolean
	isGithub?: boolean
	isText?: boolean
	icon?: React.ReactNode
	onClickHandler?: React.MouseEventHandler
}

export type TextType = {
	text: string
	classes?: string
	type?: string
	color?: string
	size?: string
}
export type ContextStateType = {
	isScrolled: Boolean | undefined
}

export type ActionType = {
	type?: string
	payload?: boolean
}

export type PageHeaderType = {
	header: string
	subHeader: string
	infoText?: string
	styleheader?: string
	styleSubheader?: string
}
