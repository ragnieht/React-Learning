import React, { useRef } from "react";
import HomeArea from "../Components/Areas/HomeArea";
import ProjectsArea from "../Components/Areas/ProjectsArea";
import SkillsArea from "../Components/Areas/SkillsArea";

export default function MainPage() {
  const skillsRef = useRef();
  return (
    <div>
      <HomeArea />
      <SkillsArea />
      <ProjectsArea />
    </div>
  );
}
