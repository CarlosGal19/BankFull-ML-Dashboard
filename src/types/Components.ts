export interface ICustomCardProps {
    title: string;
    value: string
}

export interface IHeaderProps {
    name: string;
    href: string,
    pathname: string
}

export interface IModalResultProps {
    result: number;
    onClose?: () => void;
    loading?: boolean;
    booleanResult?: boolean | null;
    selected_model?: "machine_learning" | "deep_learning";
}
