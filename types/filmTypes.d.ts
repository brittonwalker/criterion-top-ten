type Film = {
  title: string;
  count: number;
  director?: string;
  suggestedBy: string[];
  image: string;
  productPage?: string;
  meta?: {
    countries: string[];
    languages: string[];
    releaseDate: string;
    streamingLink: string;
  };
};
