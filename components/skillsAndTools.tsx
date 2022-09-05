import Java from "../public/icons/java.svg";
import SpringBoot from "../public/icons/spring-boot.svg";
import AmazonAws from "../public/icons/amazon-aws.svg";
import Bootstrap from "../public/icons/bootstrap.svg";
import CSS from "../public/icons/css 4.svg";
import Docker from "../public/icons/docker.svg";
import Eclipse from "../public/icons/eclipse.svg";
import SQL from "../public/icons/file.svg";
import Git from "../public/icons/git.svg";
import GitHub from "../public/icons/github.svg";
import Html from "../public/icons/html.svg";
import JavaScript from "../public/icons/javascript.svg";
import Mysql from "../public/icons/mysql.svg";
import NextJs from "../public/icons/Nextjs-logo.svg";
import Nginx from "../public/icons/nginx.svg";
import Rails from "../public/icons/rails.svg";
import ReactLogo from "../public/icons/react.svg";
import Ruby from "../public/icons/ruby.svg";
import Slack from "../public/icons/slack.svg";
import Ssh from "../public/icons/ssh.svg";
import TailwindCss from "../public/icons/tailwind-css.svg";
import Typescript from "../public/icons/typescript.svg";
import VisualStudioCode from "../public/icons/visual-studio-code.svg";

const SkillsAndTools = () => {
  return (
    <>
      <div className="flex place-content-around">
        <div className="flex place-content-around w-10/12 my-6">
          <Java className="h-20 w-20 fill-main-white inline-block" />
          <SpringBoot className="h-20 w-20 fill-main-white inline-block" />
          <Typescript className="h-20 w-20 fill-main-white inline-block" />
          <JavaScript className="h-20 w-20 fill-main-white inline-block" />
          <ReactLogo className="h-20 w-20 fill-main-white inline-block" />
          <TailwindCss className="h-20 w-20 fill-main-white inline-block" />
          <NextJs className="h-20 w-20 fill-main-white inline-block" />
          <Bootstrap className="h-20 w-20 fill-main-white inline-block" />
        </div>
      </div>
      <div className="flex place-content-around">
        <div className="flex place-content-around my-6 w-10/12">
          <Ruby className="h-20 w-20 fill-main-white inline-block" />
          <Rails className="h-20 w-20 fill-main-white inline-block" />
          <GitHub className="h-20 w-20 fill-main-white inline-block" />
          <Git className="h-20 w-20 fill-main-white inline-block" />
          <Mysql className="h-20 w-20 fill-main-white inline-block" />
          <SQL className="h-20 w-20 fill-main-white inline-block" />
          <Ssh className="h-20 w-20 fill-main-white inline-block" />
          <Docker className="h-20 w-20 fill-main-white inline-block" />
        </div>
      </div>
      <div className="flex place-content-around">
        <div className="flex place-content-around w-10/12 my-6">
          <Html className="h-20 w-20 fill-main-white inline-block" />

          <CSS className="h-20 w-20 fill-main-white inline-block" />
          <Eclipse className="h-20 w-20 fill-main-white inline-block" />
          <AmazonAws className="h-20 w-20 fill-main-white inline-block" />
          <VisualStudioCode className="h-20 w-20 fill-main-white inline-block" />
          <Nginx className="h-20 w-20 fill-main-white inline-block" />
          <Slack className="h-20 w-20 fill-main-white inline-block" />
        </div>
      </div>
    </>
  );
};

export default SkillsAndTools;
