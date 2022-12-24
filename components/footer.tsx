import Content from "./content";
import { GrGithub } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="py-8">
      <Content>
        <div className="flex justify-end items-center gap-4">
          <p>Created by: Britton Walker</p>
          <div className="text-[32px]">
            <a
              href="https://github.com/brittonwalker/criterion-top-ten"
              target="_blank"
              rel="noreferrer nofollow"
              className="text-black"
            >
              <GrGithub />
            </a>
          </div>
        </div>
      </Content>
    </footer>
  );
};

export default Footer;
