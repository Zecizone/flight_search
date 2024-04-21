import css from './header.module.scss';
import { IconHed } from '../shared/icon/icon-hed';

export const Header = () => {
    return (
        <header className={css.header}>
            <IconHed/>
            <h1>Поиск авиабилетов</h1>
        </header>
    )
}
