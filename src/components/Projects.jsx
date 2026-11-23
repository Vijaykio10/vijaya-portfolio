import sample from './practiceSample.json'

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
          <details><summary>Read transcript</summary><p className="model-output">{sample.transcript}</p></details>
          <details><summary>Show coaching feedback</summary><p className="model-output">{sample.feedback}</p><p>The coach displays the score twice here. Mistral returned 8/10 inside the practice question, and the app appended the parsed value as 8.0/10.</p></details>
          <small>Synthetic speech · Whisper base transcription (faster-whisper) · Mistral 7B via Ollama · Intermediate practice mode.</small>
        </article>
      </div>
    </section>
  )
}
