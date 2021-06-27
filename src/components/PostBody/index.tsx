import useStyles from "./styles"

type Props = {
  content: string
}

function PostBody({ content }: Props): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div
        className={classes.body}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody