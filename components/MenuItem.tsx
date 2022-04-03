import NextLink from "next/link";
import { LinkBox, LinkOverlay, ListIcon, ListItem } from "@chakra-ui/layout";

const MenuItem = ({ menu }) => {
  return (
    <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
      <LinkBox>
        <NextLink href={menu.route} passHref>
          <LinkOverlay>
            <ListIcon as={menu.icon} color="white" marginRight="20px" />
            {menu.name}
          </LinkOverlay>
        </NextLink>
      </LinkBox>
    </ListItem>
  );
};

export default MenuItem;
