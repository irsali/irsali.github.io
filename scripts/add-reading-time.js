import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Reading time calculation functions
function countWords(text) {
	if (!text || typeof text !== 'string') return 0;
	
	const cleanText = text
		.replace(/<[^>]*>/g, '')
		.replace(/\s+/g, ' ')
		.trim();
	
	const words = cleanText.split(/\s+/).filter(word => word.length > 0);
	return words.length;
}

function calculateReadingTime(wordCount, wordsPerMinute = 200) {
	if (wordCount <= 0) return 0;
	const readingTime = wordCount / wordsPerMinute;
	return Math.ceil(readingTime);
}

function formatReadingTime(minutes) {
	if (minutes <= 0) return 'Less than 1 min read';
	if (minutes === 1) return '1 min read';
	return `${minutes} min read`;
}

function getReadingTime(content) {
	const wordCount = countWords(content);
	const readingTime = calculateReadingTime(wordCount);
	return formatReadingTime(readingTime);
}

// Process markdown files
const postsDir = path.join(__dirname, '../src/posts/blog');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

console.log(`Found ${files.length} markdown files\n`);

files.forEach(file => {
	const filePath = path.join(postsDir, file);
	const content = fs.readFileSync(filePath, 'utf-8');
	
	// Check if readingTime already exists
	if (content.includes('readingTime:')) {
		console.log(`⏭️  ${file} - already has readingTime`);
		return;
	}
	
	// Extract frontmatter
	const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
	if (!frontmatterMatch) {
		console.log(`⚠️  ${file} - no frontmatter found`);
		return;
	}
	
	// Calculate reading time from content after frontmatter
	const contentWithoutFrontmatter = content.replace(/^---\n[\s\S]*?\n---\n/, '');
	const readingTime = getReadingTime(contentWithoutFrontmatter);
	
	// Add readingTime to frontmatter
	const frontmatter = frontmatterMatch[1];
	const updatedFrontmatter = `---\n${frontmatter}\nreadingTime: "${readingTime}"\n---`;
	const updatedContent = content.replace(/^---\n[\s\S]*?\n---/, updatedFrontmatter);
	
	// Write back to file
	fs.writeFileSync(filePath, updatedContent, 'utf-8');
	console.log(`✅ ${file} - added readingTime: ${readingTime}`);
});

console.log('\n✨ Done!');
