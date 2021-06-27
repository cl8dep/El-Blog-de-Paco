import { Avatar as MaterialAvatar } from "@material-ui/core";
import useStyles from "./styles";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  const classes = useStyles();
  return (
    <span className={classes.avatar}>
      <MaterialAvatar
        src={picture}
        alt={name}
        className={classes.innerAvatar}
      />
      <span className={classes.text}>{name}</span>
    </span>
  );
};

export default Avatar;
