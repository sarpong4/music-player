import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListIcon,
  ListItem,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import MenuItem from "./MenuItem";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const SideBar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 80px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box height="40%">
          <Box width="120px" marginBottom="10px" paddingX="20px">
            <NextImage src="/logo.svg" height={60} width={120} />
          </Box>
          <Box marginBottom="20px">
            <List spacing={2}>
              {navMenu.map((menu) => (
                <MenuItem menu={menu} />
              ))}
            </List>
          </Box>
          <Box>
            <List spacing={2}>
              {musicMenu.map((menu) => (
                <MenuItem menu={menu} />
              ))}
            </List>
          </Box>
        </Box>
        <Divider color="gray.800" marginY="20px" />
        <Box height="55%" overflow="auto">
          <List spacing={2}>
            {playlists.map((playlist) => (
              <ListItem>
                <LinkBox>
                  <NextLink href="/" passHref>
                    <LinkOverlay>{playlist}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
