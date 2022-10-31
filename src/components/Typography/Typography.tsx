import React from 'react';
import clsx from 'clsx';
import styles from './Typography.module.css';

type TypographyElementsType =
    | HTMLHeadingElement
    | HTMLSpanElement
    | HTMLParagraphElement;

export type FontThemes =
    | 'lg'
    | 'base'
    | 'xl'
    | 'xl-2'
    | 'xl-3'
    | 'xl-4'
    | 'sm'
    | 'header'
    | 'mobileHeader';
export type FontTags = 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'a';
export type FontWeights =
    | 'regular'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold';
export type FontAligns = React.CSSProperties['textAlign'];
// export type FontColors = 'black' | 'white' | 'pink';

export type TypographyProps = {
    theme?: FontThemes;
    tag?: FontTags;
    weight?: FontWeights;
    align?: FontAligns;
    color?: string;
    withBg?: boolean;
    transparent?: boolean;
} & React.DetailedHTMLProps<
    React.HTMLAttributes<TypographyElementsType>,
    TypographyElementsType
>;

const Typography: React.FC<React.PropsWithChildren<TypographyProps>> = ({
    children,
    theme = 'lg',
    tag = 'p',
    weight = 'regular',
    align = 'initial',
    color = 'black',
    withBg = false,
    transparent = false,
}) => {
    const TagToRender = tag;

    return (
        <TagToRender
            className={clsx(
                styles.typography,
                styles[theme],
                styles[weight],
                styles[align],
                styles[color],
                withBg && styles.withBg,
                transparent && styles.transparent,
            )}
        >
            {children}
        </TagToRender>
    );
};

export default Typography;
