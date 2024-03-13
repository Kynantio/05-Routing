type Props = {
      params: {
            blogs1: string
      }
    }
    
    export default function FirstBLog({ params }: Props) {
      return (
            <h1>First Blog {params.blogs1}</h1>
      )
    }