export type Project = {
  slug: string
  title: string
  description: string
  githubUrl?: string
  liveDemoUrl?: string
  stack: string[]
  photoUrl?: string
  gallery?: string[]
}
//"/University_of_Florida_seal.svg.png"
//"/download.jpg"
/*
export const projects: Project[] = [
  {
    slug: 'zetabarber-platform',
    title: 'Enterprise RAG Platform',
    description:
      'Designed and deployed a scalable Retrieval-Augmented Generation (RAG) system integrating LLMs with hybrid vector search (dense + BM25) to support enterprise knowledge retrieval.',
    liveDemoUrl: 'https://llm-labs.io/',
    stack: ['PyTorch', 'Hugging Face Transformers', 'oRA / PEFT (fine-tuning)', 'LangChain', 'FAISS', 'FastAPI', 'Docker'],
    photoUrl:
      'https://zetabarber.it/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.cddbb3f5.webp&w=1920&q=75',
    gallery: [
      'https://zetabarber.it/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.cddbb3f5.webp&w=1920&q=75',
      'https://zetabarber.it/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-platform.9dfb3a7c.png&w=3840&q=75',
    ],
  },
  {
    slug: 'warmly-ai-gtm',
    title: 'Transformer-based Summarization System',
    description:
      'Developed an abstractive document summarization platform using fine-tuned BART/T5 transformer models for enterprise document workflows.',
    liveDemoUrl: 'https://www.tldrthis.com/',
    stack: ['PyTorch', 'Hugging Face Transformers', 'Pandas', 'Numpy', 'FastAPI', 'Docker', 'Kubernetes', 'AWS'],
    photoUrl:
      'https://cdn.prod.website-files.com/6502f0ce742f93ec6c94944f/695cc5d0a8fb88d0bb174452_e7017e3eebfef000148cd58729c08aaf_hero_visual.webp',
    gallery: [
      'https://cdn.prod.website-files.com/6502f0ce742f93ec6c94944f/695cc5d0a8fb88d0bb174452_e7017e3eebfef000148cd58729c08aaf_hero_visual.webp',
      'https://cdn.prod.website-files.com/6502f0ce742f93ec6c94944f/68c837e7b96a420203f90e95_e509d482c6ca2b8ae03c6b3afd64cf6d_Live%20Signal%20Tracking%20AI%20Marketing%20Agents%20Identify%20and%20Convert%20high-intent%20leads.avif',
      'https://cdn.prod.website-files.com/6502f0ce742f93ec6c94944f/65fb560e36cdbb6c8506c6de_b4e5381e42761e755057d2c664045f87_AI-chat-n.avif',
      'https://cdn.prod.website-files.com/6502f0ce742f93ec6c94944f/6951aee7a100350c6d28978a_f44ecdcba6edbab914dc2b4f30e37fda_Integrations%20v2.avif',
    ],
  },
  {
    slug: 'gmelius-email-collaboration',
    title: 'Audio Separation with SepFormer',
    description:
      'Built an embedding-based semantic search system improving contextual relevance beyond keyword search.',
    liveDemoUrl: 'https://huggingface.co/spaces/abidlabs/music-separation/',
    stack: ['PyTorch', 'TorchAudio', 'SepFormer Architecture', 'Librosa', 'NumPy', 'Fine-tuning', 'GPU parallel training'],
    photoUrl:
      'https://cdn.prod.website-files.com/673756894ac417efeb387dda/69135952b409202b1977b57f_b38773de9b3f67e85e413119f29336b3_visual-shared-inbox.avif',
    gallery: [
      'https://cdn.prod.website-files.com/673756894ac417efeb387dda/69135952b409202b1977b57f_b38773de9b3f67e85e413119f29336b3_visual-shared-inbox.avif',
      'https://cdn.prod.website-files.com/673756894ac417efeb387dda/69135f6e8c436b60d6cf9a8d_visual-shared-labels.avif',
      'https://cdn.prod.website-files.com/673756894ac417efeb387dda/6913585375fb32da92cfaeda_visual-automations.avif',
      'https://cdn.prod.website-files.com/673756894ac417efeb387dda/6913536e10f959ed96e8d55f_visual-analytics.avif',
    ],
  },
]
  */

export const projects: Project[] = [
  {
    slug: 'zetabarber-platform',
    title: 'Enterprise RAG Platform',
    description:
      'Designed and deployed a scalable Retrieval-Augmented Generation (RAG) system integrating LLMs with hybrid vector search (dense + BM25) to support enterprise knowledge retrieval.',
    liveDemoUrl: 'https://llm-labs.io/',
    stack: ['PyTorch', 'Hugging Face Transformers', 'oRA / PEFT (fine-tuning)', 'LangChain', 'FAISS', 'FastAPI', 'Docker'],
    photoUrl:
      '/rag_1.jpg',
    gallery: [
      '/rag_1.jpg',
      '/rag_2.jpg',
      '/rag_3.jpg',
    ],
  },
  {
    slug: 'warmly-ai-gtm',
    title: 'Transformer-based Summarization System',
    description:
      'Developed an abstractive document summarization platform using fine-tuned BART/T5 transformer models for enterprise document workflows.',
    liveDemoUrl: 'https://www.tldrthis.com/',
    stack: ['PyTorch', 'Hugging Face Transformers', 'Pandas', 'Numpy', 'FastAPI', 'Docker', 'Kubernetes', 'AWS'],
    photoUrl:
      '/sum_1.jpg',
    gallery: [
      '/sum_1.jpg',
      '/sum_2.jpg',
      '/sum_3.jpg',
      '/sum_4.jpg',
    ],
  },
  {
    slug: 'gmelius-email-collaboration',
    title: 'Audio Separation with SepFormer',
    description:
      'Built an embedding-based semantic search system improving contextual relevance beyond keyword search.',
    liveDemoUrl: 'https://huggingface.co/spaces/abidlabs/music-separation/',
    stack: ['PyTorch', 'TorchAudio', 'SepFormer Architecture', 'Librosa', 'NumPy', 'Fine-tuning', 'GPU parallel training'],
    photoUrl:
      '/sep_1.jpg',
    gallery: [
      '/sep_1.jpg',
      '/sep_2.jpg',
      '/sep_3.jpg',
    ],
  },
]
