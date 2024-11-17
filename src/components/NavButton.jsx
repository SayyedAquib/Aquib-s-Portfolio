import { Button } from "@/components/ui/button";

// eslint-disable-next-line react/prop-types
const NavButton = ({ onClick, children }) => (
  <Button
    variant="outline"
    onClick={onClick}
    className="hover:text-primary transition-colors"
  >
    {children}
  </Button>
);

export default NavButton;
