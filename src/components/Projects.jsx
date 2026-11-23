const coach = 'https://github.com/Vijaykio10/ai-english-coach'

const work = [
  ['Institute research', 'Computer vision & dataset preparation', 'I select and prepare visual datasets for Indian Sign Language recognition as part of translation research at IIIT Tiruchirappalli.'],
  ['Independent work', 'Whisper & local LLM inference', 'I integrated microphone input with Whisper and used Mistral 7B through Ollama to generate corrections, practice questions, and session feedback.'],
  ['Client work', 'LLM evaluation, SQLite & Streamlit', 'I built a rubric-based transcript analysis workflow that checks supporting quotes against the source, stores results in SQLite, and presents them for review.'],
]

export default function Projects() {
  return (
    <section id="projects" className="research-section">
      <div className="research-wrap">
        <h2>Technical work</h2>
        {work.map(([context, title, description]) => (
          <article key={title} className="work-row">
            <p className="research-kicker">{context}</p>
            <div><h3>{title}</h3><p>{description}</p>
              {context === 'Independent work' && <a href={coach}>Inspect the implementation ↗</a>}
            </div>
          </article>
        ))}
        <article className="inference-panel">
          <p className="research-kicker">Speech AI · Recorded example</p>
          <h3>Follow one inference</h3>
          <p>Listen to a practice sentence, then inspect the transcript and coaching response.</p>
          <audio controls preload="metadata" aria-label="Play the synthetic English practice sentence" src="/practice-sample.wav" />
          <details><summary>Read transcript</summary><p className="model-output">Yesterday I go to the library.</p></details>
          <details><summary>Show coaching feedback</summary><p className="model-output">Yesterday I went to the library.</p><p>“Yesterday” places the action in the past. The past tense of “go” is “went”.</p></details>
          <small>Synthetic speech with an illustrative transcript and correction.</small>
        </article>
      </div>
    </section>
  )
}
