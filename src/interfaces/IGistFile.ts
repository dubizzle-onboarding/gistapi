export interface IGistFileItem {
    filename: string;
    language: string;
    raw_url: string;
    size: boolean;
    type: string;
}

export interface IGistFile {
    [key: string]: IGistFile;
}