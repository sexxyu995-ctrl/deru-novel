# Rancangan backend DERU (belum diimplementasikan)

Frontend prototipe ini tidak mengklaim menyimpan data secara online. Untuk versi produksi, backend dapat menggunakan Supabase atau stack setara.

## Tabel inti yang disarankan

- `profiles`: `id` (referensi auth user), `username` unik, `display_name`, `bio`, `avatar_path`, `created_at`.
- `novels`: `id`, `author_id`, `title`, `synopsis`, `genres`, `tags`, `language`, `status`, `visibility`, `cover_path`, `created_at`, `updated_at`, `published_at`.
- `chapters`: `id`, `novel_id`, `author_id`, `title`, `content_json` atau `content_html`, `sort_order`, `status`, `created_at`, `updated_at`.
- `bookmarks`: `user_id`, `novel_id`, `created_at` dengan unique constraint (`user_id`, `novel_id`).
- `reading_progress`: `user_id`, `novel_id`, `chapter_id`, `updated_at`.
- `follows`: `follower_id`, `author_id`, `created_at` dengan unique constraint.
- `comments`: `id`, `novel_id`, `chapter_id` nullable, `author_id`, `body`, `created_at`, `moderation_state`.
- `notifications`: `id`, `user_id`, `type`, `payload`, `read_at`, `created_at`.
- `reports`: `id`, `reporter_id`, `target_type`, `target_id`, `reason`, `state`, `created_at`.

## Keamanan minimum

1. Aktifkan row-level security. Pemilik hanya boleh mengubah novel/bab miliknya; draft tidak boleh dibaca publik.
2. Gunakan autentikasi provider. Jangan menyimpan password dalam tabel sendiri atau `localStorage`.
3. Sanitasi rich text di server sebelum dirender, validasi izin setiap mutasi, dan batasi ukuran input.
4. Cover disimpan di object storage. Validasi MIME berdasarkan isi file, ukuran, ekstensi, dan akses bucket.
5. Tambahkan rate limit untuk komentar/follow, audit log, proses laporan hak cipta, moderasi, backup, dan penghapusan akun sesuai kebijakan privasi.
6. Simpan secret key hanya di lingkungan server/edge function.

Skema di atas adalah arahan desain, bukan backend yang sudah terhubung.
