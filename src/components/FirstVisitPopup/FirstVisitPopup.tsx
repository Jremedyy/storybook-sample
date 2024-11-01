import { ReactNode, useEffect, useState } from "react";
import {
  ChildrenWrapper,
  CloseSvgWrapper,
  Overlay,
  StyledCloseSvg,
} from "./styles";
import { DesktopNewsLetterWidget } from "../DesktopNewsLetterWidget";
import { CloseSvg } from "@/common/icons";

export interface FirstVisitPopupProps {
  onEmailSubmit: (emailAddress: string) => Promise<void>;
  children?: ReactNode;
}

export const FirstVisitPopup = (props: FirstVisitPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has visited before
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      // Set a timeout to open the popup after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Mark the user's visit in localStorage
        localStorage.setItem("hasVisited", "true");
      }, 2500);

      // Cleanup the timer when the component unmounts
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Overlay>
          <ChildrenWrapper>
            <CloseSvgWrapper onClick={() => closePopup()}>
              <StyledCloseSvg />
            </CloseSvgWrapper>
            <DesktopNewsLetterWidget
              title={""}
              description={
                "Want the latest updates on the stock trades of U.S. politicians? Sign up for exclusive insights and never miss a beat."
              }
              handleSubscribe={async function (
                emailAddress: string,
              ): Promise<void> {
                await props.onEmailSubmit(emailAddress);
                closePopup();
              }}
            />
          </ChildrenWrapper>
        </Overlay>
      )}
    </>
  );
};
