import ConceptCard from "./Card";
import VideoCard from "./VideoCard";
import ConceptTag from "./Tag";

const conceptTagFactory = (name) => {
  return {
    print: (
      <ConceptTag
        name="print"
        category="builtin"
        videoCard={<VideoCard videos={["LWdsF79H1Pg"]} />}
        card={
          <ConceptCard
            title="print"
            examples={[
              {
                code: "print('Hello, World!')",
                description: (
                  <p>Prints the message 'Hello, World!' to Standard Out</p>
                ),
              },
              {
                code: "print('Goodbye, World!')",
                description: (
                  <p>Prints the message 'Goodbye, World!' to Standard Out</p>
                ),
              },
            ]}
          />
        }
      ></ConceptTag>
    ),
    str: (
      <ConceptTag
        name="str"
        category="builtin"
        card={
          <ConceptCard
            title="str"
            examples={[
              {
                code: "str(5)",
                description: <p>Converts the integer 5 to a string '5'</p>,
              },
              {
                code: "str(5.0)",
                description: <p>Converts the float 5.0 to a string '5.0'</p>,
              },
              {
                code: "str(True)",
                description: (
                  <p>Converts the boolean True to a string 'True'</p>
                ),
              },
              {
                code: "str([1, 2, 3])",
                description: (
                  <p>Converts the list [1, 2, 3] to a string '[1, 2, 3]'</p>
                ),
              },
              {
                code: "str((1, 2, 3))",
                description: (
                  <p>Converts the tuple (1, 2, 3) to a string '(1, 2, 3)'</p>
                ),
              },
            ]}
          />
        }
      ></ConceptTag>
    ),
    "string literal": (
      <ConceptTag
        name="string literal"
        category="datatype"
        card={
          <ConceptCard
            title="string literal"
            examples={[
              {
                code: "'Hello, World!'",
                description: (
                  <p>A sequence of characters enclosed in double quotes</p>
                ),
              },
              {
                code: '"Hello, World!"',
                description: (
                  <p>A sequence of characters enclosed in single quotes</p>
                ),
              },
              {
                code: '"""Hello, World!"""',
                description: (
                  <p>A sequence of characters enclosed in triple quotes</p>
                ),
              },
              {
                code: "'goodevening'",
                description: <p>A sequence of characters enclosed in quotes</p>,
              },
            ]}
          />
        }
      ></ConceptTag>
    ),
    "standard out": (
      <ConceptTag
        name="standard out"
        category="IO"
        card={
          <ConceptCard
            title="Standard Out"
            examples={[
              {
                code: "print('Hello, World!')",
                description: (
                  <div>
                    <p>Prints the message 'Hello, World!' to Standard Out</p>
                    <p>
                      In the terminal this is the screen. In the browser it is
                      the standard output section.
                    </p>
                  </div>
                ),
              },
            ]}
          />
        }
      ></ConceptTag>
    ),
  }[name];
};

export default conceptTagFactory;
