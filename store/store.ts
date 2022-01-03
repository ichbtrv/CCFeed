import { proxy } from 'valtio'

export interface PostProxy {
  title: string
  content: string
}

export interface MediaProxy {
  mediaUrl: string
}

export interface contentProxy {
  showContentValue: boolean
}

export const mediaState = proxy<MediaProxy>({
  mediaUrl:
    'https://res.cloudinary.com/dorofetal/video/upload/v1640515622/my_video.mov',
})
export const postState = proxy<PostProxy>({ title: '', content: '' })
export const contentState = proxy<contentProxy>({ showContentValue: true })
export const actions = {
  setPostState(proxyState: PostProxy) {
    postState.title = proxyState.title
    postState.content = proxyState.content
  },
  setMediaState(proxyMediaState: string) {
    mediaState.mediaUrl = proxyMediaState
  },
  getMediaState() {
    return mediaState.mediaUrl
  },
  setContentState(proxyContentState: boolean) {
    contentState.showContentValue = proxyContentState
  },
}
