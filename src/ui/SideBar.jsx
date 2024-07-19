import React from "react";
import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-gry-100);
  grid-row: 1/-1;
`;

function SideBar() {
  return (
    <StyledSidebar>
      <h1>SideBar</h1>
    </StyledSidebar>
  );
}

export default SideBar;
