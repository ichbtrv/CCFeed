import PageContainer from 'components/layout/pagecontainer/PageContainer'

import Link from 'next/link'
// nice

const success = (props) => {
  return (
    <PageContainer>
      <div> Post Successful!</div>
      <br />
      <div>
        {' '}
        <p>
          {' '}
          <Link href="/" passHref>
            <span className="text-sky-400 px-2 hover:cursor-pointer">
              Click Here
            </span>
          </Link>
          to go Home
        </p>{' '}
      </div>
    </PageContainer>
  )
}

export default success
