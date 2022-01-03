export interface SerializeInterface {
  _id: string
  published: boolean
  title: string
  content: string
  mediaContentUrl: string
  author: string
  authorId: string

  createdAt: { Uint8Array }
  updatedAt: { Uint8Array }
}

export interface SerializedStringInterface {
  _id: string
  published: boolean
  title: string
  content: string
  mediaContentUrl: string
  author: string
  authorId: string

  createdAt: string
  updatedAt: string
}

export async function serialize({
  _id,
  published,
  title,
  content,
  mediaContentUrl,
  author,
  authorId,

  createdAt,
  updatedAt,
}: SerializeInterface) {
  return {
    id: _id, // for some reason next doesn't like the `_id` property + non-string
    published: published,
    title: title,
    content: content,
    mediaContentUrl: mediaContentUrl,
    author: author,
    authorId: authorId,
    createdAt: createdAt.toString(),
    updatedAt: updatedAt.toString(), // cast as string
  }
}
