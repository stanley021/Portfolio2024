import {IconCloud} from "@/components/ui/skillglobe";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css",
  "nodedotjs",
  "nextdotjs",
  "postgresql",
  "firebase",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
];

export function IconCloudDemo() {
    return (
        
      <div
        className="m-20"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%',
          maxWidth: '70vh',
          height: '50vh',
          margin: '0 auto',

        }}
      >
        <h1 className="heading -translate-x-12">
        Tech<span className="text-purple"> Stack</span>
        </h1>
        <IconCloud iconSlugs={slugs} />
      </div>
    );
  }
  
  
